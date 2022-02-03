import { mount } from '@vue/test-utils'
import Empty from '../components/Empty.vue'

test('mount component', async() => {
  const wrapper = mount(Empty)

  expect(wrapper.text()).toContain('Empty')
})
