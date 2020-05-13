import dataNav from './nav';
import dataEvents from './events';
import dataPartners from './partners';
import dataTeams from './teams';
import dataSponsors from './sponsors';
import dataFooter from './footer';

const dataInitialValues = {
    isLoading: false,
    recaptchaKeyV3: '6Le-y_AUAAAAACYlmZWa6szsfjfQjIzaF606Bxd5',
    recaptchaKeyV2: '6LfQ2fAUAAAAABPP9L4Biv-sNGJ1H4a-YCJJJLzB',
    secretRecaptchaKeyV2: '6LfQ2fAUAAAAABXzOV_KmI_qymJebDH13KsYVses'
}
const vlaData = { ...dataInitialValues, ...dataNav, ...dataEvents, ...dataTeams, ...dataSponsors, ...dataPartners, ...dataFooter };
export default vlaData;