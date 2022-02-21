import styled from "styled-components"

export const TopBar = styled.div`
  top: 0;
  z-index: 1;
  height: 60px;
  display: flex;
  position: sticky;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 5px #b9b9b9;
`

// --------------------------- Left side ---------------------------------
export const TopBarLeft = styled.div`
  margin-right: 10px;
  flex: 3;
`

export const Logo = styled.span`
  padding-left: 25px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`

// --------------------------- Center side -------------------------------
export const TopBarCenter = styled.div`
  flex: 5;
  margin-right: 10px;
  border: 1px solid #989898;
  border-radius: 20px;
  
  .searchIcon{
    font-size: 40px;
    margin-left: 10px;
    margin-right: 0px;
    padding-right: 20px ;
    cursor: pointer;
  }
  @media only screen and (max-width:610px) {
    flex: auto;
    width: ${(props) => props.width};
  }
`

export const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: -10px;
  margin-right: auto;
  border-radius: 20px;
`

// --------------------------- Right side --------------------------------
export const TopBarRight = styled.div`
  flex: 3;
`

export const TopBarIcons = styled.div`
  display: flex;

  .topbarIconItem {
    
  }

  .topbarIconBadge {
    width: 15px;
    height: 15px;
    background-color: #bcbbe3;
    border-radius: 50%;
    color: white;
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  @media only screen and (max-width: 610px) {
    position: relative;
    right: 20px;
  }
`

export const TopBarIconItem = styled.div`
  top: 5px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;

  :hover:before {
    display:block;
  }
  :before{
    content: '${(props) => props.content}';
    position:absolute;
    opacity: 50%;
    transform:translateY(-50%);
    
    left:-35px;
    top:50px;
    width:100px;
    height:fit-content;
    border-radius:10px;
    background:#6f6cd2;
    color: white;
    text-align:center;
    display:none;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`