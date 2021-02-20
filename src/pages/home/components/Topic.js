import React, { Component } from 'react'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className='topic-img' src="https://upload-images.jianshu.io/upload_images/16572117-9777cb5c4c862d71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic