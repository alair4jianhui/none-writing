import React from 'react';
import {Link} from 'react-router';

const Navigation = React.createClass({
	render(){
		return (
  			<div>
  				<button type="button" className="am-btn am-btn-warning">
	      			<Link to='/inbox'>获取列表</Link>
	      		</button>
	      		<button type="button" className="am-btn am-btn-warning">
	      			<Link to='/about'>关于我</Link>
	      		</button>
	      		<button type="button" className="am-btn am-btn-warning">
	      			<Link to='/date'>关于日期</Link>
	      		</button>
  			</div>
		);
	}
});

module.exports = Navigation;