import {companies} from "../configuration/constants";

export function selectCompanyImg(manufacturer) {
    let href = companies.get(manufacturer);
    return href === undefined ? 'https://previews.123rf.com/images/lineartestpilot/lineartestpilot1603/lineartestpilot160311464/53364018-freehand-drawn-cartoon-laptop-computer-with-question-mark.jpg'
        : href;
}