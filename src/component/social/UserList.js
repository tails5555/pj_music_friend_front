import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Graph from 'vis-react';
import './star.css';
class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
            userList : [
                { id : 1, name : "강인성", musicList : [ { title : "가", singer : "1llionaire Records" }, { title : "이미 슬픈 사랑", singer : "야다" }], isFriend : false},
                { id : 2, name : "장승훈", musicList : [ { title : "어디에도", singer : "M.C. The Max" }, { title : "여전히 아름다운지", singer : "토이" }, { title : "본능적으로", singer : "윤종신(Feat.Swings)" }], isFriend : true},
                { id : 3, name : "서종현", musicList : [ { title : "호랑나비", singer : "김흥국" }, { title : "She's Gone", singer : "Still Heart" }], isFriend : true },
                { id : 4, name : "박병조", musicList : [ { title : "나란 놈은 답은 너다", singer : "리쌍(Feat.하림)" }, { title : "사랑Two", singer : "YB" }], isFriend : true },
                { id : 5, name : "김영곤", musicList : [ { title : "맛 좋은 산", singer : "San E" }], isFriend : false }
            ]
        }
    }

    handleChange(userId){ // 추후에 로그인을 안 한 회원들에 대해서는 즐겨찾기 추가를 하지 않고 바로 로그인을 하는 페이지로 넘어갈 수 있도록 지시를 할 예정.
        let tmpUser=this.state.userList[userId-1];
        tmpUser.isFriend=!tmpUser.isFriend;
        let newUser=this.state.userList.slice();
        newUser[userId-1]=tmpUser;
        this.setState({
            tmpUser : newUser
        })
    }

    render(){
        var user = {
            face: 'FontAwesome',
            code: '\uf007',
            size: 50,
            color: '#81BEF7'
        };
        // create an array with nodes
        var nodesFA = [{
            id: 1,
            label: '강인성',
            shape : 'icon',
            icon: user
        }, {
            id: 2,
            label: '이원일',
            shape : 'icon',
            icon: user
        }, {
            id: 3,
            label: '최홍철',
            shape : 'icon',
            icon: user
        }, {
            id: 4,
            label: '이두환',
            shape : 'icon',
            icon: user
        }, {
            id: 5,
            label: '최현석',
            shape : 'icon',
            icon: user
        }];

        // create an array with edges
        var edges = [{
            from: 1,
            to: 3,
            value: 4,
            label: '서태지와 아이들 - 난 알아요\n윤도현 - 잊을께'
        }, {
            from: 1,
            to: 4,
            value: 5,
            label: '성시경 - 거리에서'
        }, {
            from: 2,
            to: 4,
            value: 2,
            label: '성시경 - 넌 감동이었어\n김범수 - 하루\n윤도현 - 빗속에서'
        }, {
            from: 3,
            to: 5,
            value: 1,
            label: '노찾사 - 사계'
        }, {
            from: 4,
            to: 5,
            value: 1,
            label: '윤도현 - 빗속에서'
        }];

        // create a network
        var dataFA = {
            nodes: nodesFA,
            edges: edges
        };

        var options = {
            nodes: {
                scaling:{
                    label: {
                        min:8,
                        max:20
                    }
                }
            },
            edges : {
                arrows: {
                    to:     {enabled: false, scaleFactor:1, type:'arrow'},
                    middle: {enabled: false, scaleFactor:1, type:'arrow'},
                    from:   {enabled: false, scaleFactor:1, type:'arrow'}
                },
                width : 0.5,
                hoverWidth: 1,
                color : "#DA81F5",
                font: {
                    size : 1,
                    align: 'bottom'
                }
            },
            physics: {
                enabled: false
            }
        };

        return(
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 graphScreen">
                    <Graph graph={dataFA} options={options} />
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}
export default UserList;