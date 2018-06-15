import React from 'react';
import {Table} from "antd";

import {connect} from "dva";

import "./cartable.less";

class CarTable extends React.Component {
 
	constructor(props) {
		super(props);
	}

	render() {
		const columns = [
			{
			  title: 'id',
			  dataIndex: 'id',
			  key: 'id'
			},
			{
			  title: '图片',
			  dataIndex: 'img',
			  key: 'img',
			  render : function(text , recode){
			  	return <img src={`/carimages_small/${recode.id}/view/${recode.img}`} alt=""/>
			  }
			},
			{
			  title: '品牌',
			  dataIndex: 'brand',
			  key: 'brand'
			}, 
			{
			  title: '车系',
			  dataIndex: 'series',
			  key: 'series'
			}, 
			{
			  title: '车主',
			  dataIndex: 'owner',
			  key: 'owner'
			}, 
			{
			  title: '颜色',
			  dataIndex: 'color',
			  key: 'color'
			}, 
			{
			  title: '排量',
			  dataIndex: 'engin',
			  key: 'engin'
			}, 
			{
			  title: '变速箱',
			  dataIndex: 'gear',
			  key: 'gear'
			}, 
			{
			  title: '行驶公里数',
			  dataIndex: 'km',
			  key: 'km'
			}, 
			{
			  title: '价格（万元）',
			  dataIndex: 'price',
			  key: 'price'
			}, 
			{
			  title: '购买日期',
			  dataIndex: 'buydate',
			  key: 'buydate'
			}
		];

		return (
		  <div className="cartable">
	  			<Table dataSource={this.props.cars} columns={columns} />
		  </div>
		);
	}
}

export default connect(
	({carlist})=>({
		cars : carlist.cars
	})
)(CarTable);