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
                            <input class="form-control form-control-lg" type="text" placeholder="아이디를 입력하세요." id="inputLarge" />
                        </div>
                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg" for="inputLarge">PASSWORD</label>
                            <input class="form-control form-control-lg" type="password" placeholder="비밀번호를 입력하세요." id="inputLarge2" />
                        </div>
                        <br/>
                        <button type="button" class="btn btn-success btn-block">Login</button>

                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}
export default LoginForm;