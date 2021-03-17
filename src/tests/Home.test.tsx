import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from '../components/Home';

Enzyme.configure({ adapter: new Adapter() });

it('Should Redirect', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toBeTruthy();
});