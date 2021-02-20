import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style.js'

class Header extends Component {
  
  getListArea () {
    const { focused, list, page, mouseIn, totalPage } = this.props
    const pageList = []
    const newList = list.toJS()
    for (let i = page * 10; i < (page + 1) * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{ newList[i] }</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
         onMouseEnter={() => {this.props.handleMouseEnter()}}
         onMouseLeave={() => {this.props.handleMouseLeave()}}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {this.props.handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
            <SearchInfoList>
             {pageList}
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav> 
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe634;</i>
          </NavItem>
          <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide"
          >
            <SearchWrapper>
              <NavSearch 
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe65a;</i>
              { this.getListArea() }
            </SearchWrapper>
          </CSSTransition>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe605;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList()) // 获取推荐列表
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      console.log(page, totalPage)
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)