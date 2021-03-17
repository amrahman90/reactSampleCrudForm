import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CurdForm from '../components/CurdForm';

Enzyme.configure({ adapter: new Adapter() });

describe('CurdForm', () => {
  it('should show text', () => {
    const wrapper = shallow(<CurdForm />);
  })
})
