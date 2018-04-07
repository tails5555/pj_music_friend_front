import React, {Component} from 'react';
class LoginForm extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form>
                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg" for="inputLarge">ID</label>
                            <input class="form-control form-control-lg" type="text" placeholder="이용할 아이디를 입력하세요." id="inputLarge" />
                        </div>
                        <button type="button" class="btn btn-info btn-block">중복 확인</button>
                        <br/>
                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg" for="inputLarge">PASSWORD</label>
                            <input class="form-control form-control-lg" type="password" placeholder="비밀번호를 입력하세요." id="inputLarge2" />
                        </div>
                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg" for="inputLarge">PASSWORD CONFIRM</label>
                            <input class="form-control form-control-lg" type="password" placeholder="비밀번호를 다시 입력해주세요." id="inputLarge3" />
                        </div>
                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg" for="inputLarge">YOUR NAME IS</label>
                            <input class="form-control form-control-lg" type="text" placeholder="이름을 입력하세요." id="inputLarge4" />
                        </div>
                        <br/>
                        <button type="button" class="btn btn-success btn-block">가입하기</button>
                        <br/>
                        <button type="button" class="btn btn-danger btn-block">초기화</button>
                        <br/>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
export default LoginForm;