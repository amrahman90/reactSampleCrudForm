import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CurdForm from '../components/CurdForm';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ id: undefined }),
}));

it('renders correctly', () => {
  const wrapper = shallow(<CurdForm />);
  expect(wrapper).toBeTruthy();
});
