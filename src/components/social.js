import React from 'react';

const Social = (props) => {
    return (
        <div className="section">
            <div className="section-title">Social</div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                    className="icon" alt="github" />
                <input id="github" placeholder="github username" className="inputField lg"
                value={props.social.github} onChange={event => props.handleSocialChange('github', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                className="icon" alt="twitter" />
                <input id="twitter" placeholder="twitter username" className="inputField lg"
                value={props.social.twitter} onChange={event => props.handleSocialChange('twitter', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
                className="icon" alt="dev.to" />
                <input id="dev" placeholder="dev.to username" className="inputField lg"
                value={props.social.dev} onChange={event => props.handleSocialChange('dev', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                className="icon" alt="codepen" />
                <input id="codepen" placeholder="codepen username" className="inputField lg"
                value={props.social.codepen} onChange={event => props.handleSocialChange('codepen', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"
                className="icon" alt="codesandbox" />
                <input id="codesandbox" placeholder="codesandbox username" className="inputField lg"
                value={props.social.codesandbox} onChange={event => props.handleSocialChange('codesandbox', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                className="icon" alt="stackoverflow" />
                <input id="stackoverflow" placeholder="stackoverflow user ID" className="inputField lg"
                value={props.social.stackoverflow} onChange={event => props.handleSocialChange('stackoverflow', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                className="icon" alt="linkedin" />
                <input id="linkedin" placeholder="linkedin username" className="inputField lg"
                value={props.social.linkedin} onChange={event => props.handleSocialChange('linkedin', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg"
                className="icon" alt="kaggle" />
                <input id="kaggle" placeholder="kaggle username" className="inputField lg"
                value={props.social.kaggle} onChange={event => props.handleSocialChange('kaggle', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                className="icon" alt="facebook" />
                <input id="fb" placeholder="facebook username" className="inputField lg"
                value={props.social.fb} onChange={event => props.handleSocialChange('fb', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                className="icon" alt="instagram" />
                <input id="instagram" placeholder="instagram username" className="inputField lg"
                value={props.social.instagram} onChange={event => props.handleSocialChange('instagram', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/dribbble.svg"
                className="icon" alt="dribbble" />
                <input id="dribbble" placeholder="dribbble username" className="inputField lg"
                value={props.social.dribbble} onChange={event => props.handleSocialChange('dribbble', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/behance.svg"
                className="icon" alt="behance" />
                <input id="behance" placeholder="behance username" className="inputField lg"
                value={props.social.behance} onChange={event => props.handleSocialChange('behance', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg"
                className="icon" alt="medium" />
                <input id="medium" placeholder="medium username (with @)" className="inputField lg"
                value={props.social.medium} onChange={event => props.handleSocialChange('medium', event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/youtube.svg"
                className="icon" alt="youtube" />
                <input id="youtube" placeholder="youtube channel name" className="inputField lg"
                value={props.social.youtube} onChange={event => props.handleSocialChange('youtube', event)} />
            </div>
    
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
                className="icon" alt="codechef" />
                <input id="codechef" placeholder="codechef username" className="inputField lg"
                value={props.social.codechef} onChange={event => props.handleSocialChange('codechef',event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerrank.svg"
                className="icon" alt="hackerrank" />
                <input id="hackerrank" placeholder="hackerrank username" className="inputField lg"
                value={props.social.hackerrank} onChange={event => props.handleSocialChange('hackerrank',event)} />
            </div> 
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codeforces.svg"
                className="icon" alt="codeforces" />
                <input id="codeforces" placeholder="codeforces username" className="inputField lg"
                value={props.social.codeforces} onChange={event => props.handleSocialChange('codeforces',event)} />
            </div> 
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/leetcode.svg"
                className="icon" alt="leetcode" />
                <input id="leetcode" placeholder="leetcode username" className="inputField lg"
                value={props.social.leetcode} onChange={event => props.handleSocialChange('leetcode',event)} />
            </div> 
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/topcoder.svg"
                className="icon" alt="topcoder" />
                <input id="topcoder" placeholder="topcoder username" className="inputField lg"
                value={props.social.topcoder} onChange={event => props.handleSocialChange('topcoder',event)} />
            </div> 
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerearth.svg"
                className="icon" alt="hackerearth" />
                <input id="hackerearth" placeholder="hackerearth username" className="inputField lg"
                value={props.social.hackerearth} onChange={event => props.handleSocialChange('hackerearth',event)} />
            </div>
            <div className="container">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/geeksforgeeks.svg"
                className="icon" alt="geeksforgeeks" />
                <input id="geeksforgeeks" placeholder="geeksforgeeks username" className="inputField lg"
                value={props.social.geeks_for_geeks} onChange={event => props.handleSocialChange('geeks_for_geeks',event)} />
            </div>
        </div>
    );
}

export default Social;
