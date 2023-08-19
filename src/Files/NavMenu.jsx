/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
const NavMenu = () => {
    useEffect(()=>{
        $('.ui.sidebar').sidebar({
            context: $('.ui.pushable.segment'),
            transition: 'overlay'
        }).sidebar('attach events', '#mobile_item');
    },[])
  return (
    <div>
        <div className="ui grid">
	
	<div className="computer only row">
		<div className="column">
			<div className="ui menu">
				<a className="item">Menu Item A</a>
				<a className="item">Menu Item B</a>
				<a className="item">Menu Item C</a>
				<a className="item">Menu Item D</a>
			</div>
		</div>
	</div>
	
	 <div className="tablet mobile only row">
		<div className="column">
			<div className="ui menu">
				<a id="mobile_item" className="item"><i className="bars icon"></i></a>
			</div>
		</div>
	</div>

</div>

<div className="ui pushable segment">
		<div className="ui sidebar vertical menu">
			<a className="item">Menu Item A</a>
			<a className="item">Menu Item B</a>
			<a className="item">Menu Item C</a>
			<a className="item">Menu Item D</a>
		</div>
		<div className="pusher">
				<div id="content" className="ui segment">
						Content here
				</div>
		 </div>
</div>
    </div>
  )
}

export default NavMenu