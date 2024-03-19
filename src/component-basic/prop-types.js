// 코드에서 PropTypes 객체 import 필요
import PropTypes from 'prop-types'

const PersonProfile = function({ name="Unknown", age, gender, profile="https://via.placeholder.com/150", highlight=false }) {
    return (
        <div className='person' style={highlight ? { color: 'red' } : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

// propTypes
// 콘솔에 경고만 띄울 뿐 코드 실행 전 에러가 나지는 않음 (자바스크립트는 인터프리터 언어이므로 불가)
PersonProfile.propTypes = {
    // PropTypes.자료형[.isRequired]
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string,
    profile: PropTypes.string
}

const App = function() {
    {/*
        경고1)
        index.js:1 Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `PersonProfile`, expected `number`.

        경고2) (경고1이 해결되면 표시됨)
        Warning: Failed prop type: The prop `gender` is marked as required in `PersonProfile`, but its value is `undefined`.
    */}
    return <PersonProfile age='30' />
    // 경고 없이 정상적으로 컴포넌트 출력 가능
    // return <PersonProfile age={30} gender="male" />
}