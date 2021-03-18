import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CurdForm from '../components/CurdForm';
import { Button } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ id: undefined }),
}));

describe('CurdForm', () => {
  it('should be defined', () => {
    expect(CurdForm).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(<CurdForm />);
    expect(tree).toMatchSnapshot();
  });

  it('Simulates button click ', () => {
    const wrapper = shallow(<CurdForm />);

    wrapper.find('#save-button').simulate('click');
    expect(wrapper.find('#error-grid p')).toHaveLength(2);
  });

  it('inputs name of the key field ', () => {
    const wrapper = shallow(<CurdForm />);

    wrapper.find('#name-of-key').simulate('change', { target: { value: 'asraf' } });
    wrapper.find('#save-button').simulate('click');
    expect(wrapper.find('#error-grid p')).toHaveLength(1);
  });

  it('selects two select options', () => {
    const wrapper = shallow(<CurdForm />);

    wrapper.find('#select-one').simulate('change', { target: { value: '1', name: '1' } });
    wrapper.find('#select-two').simulate('change', { target: { value: '3', name: '2' } });
    wrapper.find('#save-button').simulate('click');
    expect(wrapper.find('#error-grid p')).toHaveLength(1);
  });
});
