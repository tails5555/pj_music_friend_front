import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './rating.css';
import './heart.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function getCaret(direction) {
    if (direction === 'asc') {
        return (
            <i class="fas fa-sort-up"></i>
        );
    }
    if (direction === 'desc') {
        return (
            <i class="fas fa-sort-down"></i>
        );
    }
    return (
        <i class="fas fa-sort"></i>
    );
}

class MyLikeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            tmpMusicList : [
                { title : "가", singer : "1llionaire Records", album : "11:11", musicId : 1, like : true },
                { title : "내가", singer : "Dok2(Feat. The Quiett, Beenzino)", album : "Multillionaire", musicId : 2, like : true },
                { title : "니가 싫어하는 노래", singer : "Dok2, Jay Park", album : "MOST HATED", musicId : 3, like : true },
                { title : "SIMON DOMINIC", singer : "쌈디(Simon D.)", album : "WON & ONLY", musicId : 4, like : true },
                { title : "2 Chainz & Rollies", singer : "The Quiett(Feat.Dok2)", album : "AMBITIQN", musicId : 5, like : true }
            ]
        }; // 추후에 MusicList를 받아올 때에는 Redux를 통해서 StateToProps로 받아올 수 있기 때문에 우선은 여기서는 state를 이용하여 저장을 하겠다.
    }

    handleChange(musicId){ // 추후에 로그인을 안 한 회원들에 대해서는 즐겨찾기 추가를 하지 않고 바로 로그인을 하는 페이지로 넘어갈 수 있도록 지시를 할 예정.
        let tmpMusic=this.state.tmpMusicList[musicId-1];
        tmpMusic.like=!tmpMusic.like;
        let newMusic=this.state.tmpMusicList.slice();
        newMusic[musicId-1]=tmpMusic;
        this.setState({
            tmpMusicList : newMusic
        })
    }

    likeButton(musicId) {
        if(this.state.tmpMusicList[musicId-1].like){
            return (
                <div>
                    <input id={musicId} checked={this.state.tmpMusicList[musicId-1].like} className="toggle-heart" type="checkbox" onChange={() => this.handleChange(musicId)} />
                    <label for={musicId} className="toggle-heart-label">❤</label>
                </div>
            )
        }else{
            return (
                <div>
                    <input id={musicId} value={this.state.tmpMusicList[musicId-1].like} className="toggle-heart" type="checkbox" onChange={() => this.handleChange(musicId)} />
                    <label for={musicId} className="toggle-heart-label">❤</label>
                </div>
            )
        }
    }

    render(){
        const options = {
            page: 1, // 기본 페이지
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: '15', value: 15
            }
            ], // 몇 줄 씩 나오게 하나요
            sizePerPage: 5,  // 페이지 이전, 다음 구분용
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: '이전', // Previous page button text
            nextPage: '다음', // Next page button text
            firstPage: '처음', // First page button text
            lastPage: '마지막', // Last page button text
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };

        return(
            <BootstrapTable data={ this.state.tmpMusicList } bordered={ false } pagination={true} search={ true } options={ options }>
                <TableHeaderColumn isKey={true} width='100' tdStyle={ { verticalAlign : 'middle' } } dataField='musicId' dataFormat={ this.likeButton.bind(this) } className="table-info" dataAlign='center'>좋아요</TableHeaderColumn>
                <TableHeaderColumn dataField='title' tdStyle={ { verticalAlign : 'middle' } } dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>제목 </TableHeaderColumn>
                <TableHeaderColumn dataField='singer' tdStyle={ { verticalAlign : 'middle' } } dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>가수 </TableHeaderColumn>
                <TableHeaderColumn dataField='album' tdStyle={ { verticalAlign : 'middle' } } dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>앨범 이름 </TableHeaderColumn>
            </BootstrapTable>
        )
    }
}
export default MyLikeList;