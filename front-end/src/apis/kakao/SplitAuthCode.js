/** 발급된 인가코드를 리턴 */
const splitAuthCode = () => {
    // urlParams : 현재 url의 쿼리스트링 부분이 저장
    const urlParams = new URLSearchParams(window.location.search);
    // code : urlParams 에서 인가코드만 떼어 저장
    const code = urlParams.get('code');
    return code;
};

export default splitAuthCode;