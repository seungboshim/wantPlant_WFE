/** 카카오 JavaScript SDK key값 초기화하여 리턴 */
const kakaoInit = () => {
    const kakao = window.Kakao;
    
    // isInitialized() : 카카오 JavaScript SDK의 초기화 여부 (boolean)
    if (kakao && !kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        // init() : 카카오 JavaScript SDK를 초기화
        console.log(kakao.isInitialized());
    }

    return kakao;
}

export default kakaoInit;