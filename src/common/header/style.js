import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;   
  height: 58px;
  border-bottom 1px solid #f0f0f0;
`
export const Logo = styled.a`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding:0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NavSearch =  styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all ease-out .2s;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all ease-out .2s;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchWrapper = styled.div`
  position relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #787878;
`
export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  float: left;
  margin:10px 10px 0 0;
  color: #969696;
`