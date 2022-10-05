from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "Ukraine"

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///trips.db'

db = SQLAlchemy(app)


class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(60))
    duration = db.Column(db.Integer)
    price = db.Column(db.Integer)

    def __init__(self, country, duration, price):
        self.country = country
        self.duration = duration
        self.price = price


@app.route('/')
def Index():  # put application's code here
    all_data = Data.query.all()
    return render_template('index.html', trips = all_data)


@app.route('/insert', methods=["POST"])
def insert():
    if request.method == 'POST':
        country = request.form['country']
        duration = request.form['duration']
        price = request.form['price']

        myData = Data(country, duration, price)
        db.session.add(myData)
        db.session.commit()

        flash("Trip inserted successfully")

        return redirect(url_for('Index'))

@app.route('/update/<int:id>/', methods=["POST", "GET"])
def update(id):
    my_data = Data.query.get_or_404(id)

    if request.method == 'POST':
        my_data.country = request.form['country']
        my_data.duration = request.form['duration']
        my_data.price = request.form['price']

        db.session.commit()
        flash("Trip updated successfully")
        return redirect(url_for('Index'))

@app.route('/delete/<id>/', methods=["POST", "GET"])
def delete(id):
        my_data = Data.query.get(id)
        db.session.delete(my_data)
        db.session.commit()
        flash("Trip deleted successfully")
        return redirect(url_for('Index'))

@app.route('/deleteAll', methods=["POST", "GET"])
def deleteAll():
       db.session.query(Data).delete()
       db.session.commit()
       return redirect(url_for('Index'))


if __name__ == '__main__':
    app.run()
