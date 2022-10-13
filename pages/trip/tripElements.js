import styled from "styled-components";
export const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const TripWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

export const TripTitle = styled.p`
    font-weight: 530;
    font-size: 24px;
    `
export const TripSubTitle = styled.p`
    font-size: 20px;
    font-weight: 520;
    `

export const TripDetails = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    gap: 50px
  
  
    `
export const TripImage = styled.img`
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    
    `
export const TripInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px
  `

export const TripMain = styled.div`
    padding:  40px 10px;
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 40px;
   
    `
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px
    `
export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px
    `
export const Text = styled.p`
    font-size: 14px;
    `
export const TextTitle = styled.p`
    font-size: 18px;
    `
export const TripDescription = styled.div`
  margin-top: 30px;
   display: grid;
   grid-template-columns: 1fr 0.5fr ;
   grid-gap: 30px;
`
export const DescTitle = styled.p`
    font-size: 20px;
    font-weight: bolder;
    `
export const DescText = styled.p`
    font-size: 16px;
  line-height: 24px;
    
    `
export const Desc = styled.div`
   display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`
export const DownPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
 
`