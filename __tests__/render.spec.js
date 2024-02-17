import {describe, it, expect, beforeAll} from 'vitest'
import {mount, shallowMount} from "@vue/test-utils"
import { createPinia } from 'pinia'

import NameAuth from '@/components/elements/auth/NameAuth.vue'
import RulesAuth from '@/components/elements/auth/RulesAuth.vue'
import AuthWith from '@/components/elements/auth/AuthWith.vue'
import ConfirmEmail from '@/components/elements/confirm/ConfirmEmail.vue'
import ConfirmNumber from '@/components/elements/confirm/ConfirmNumber.vue'

//config
let wrapper;
beforeAll(() => {
  wrapper = shallowMount(AuthWith, {
    global: {
      plugins: [createPinia()],
    },
  });
})

describe('NameAuth', () => {
  it('should render correctly', () => {
    wrapper = mount(NameAuth)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('RulesAuth', () => {
  it('should render correctly', () => {
    wrapper = mount(RulesAuth)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('AuthWith', () => {
  it('should render correctly', () => {
    wrapper = mount(AuthWith)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('ConfirmEmail', () => {
  it('should render correctly', () => {
    wrapper = mount(ConfirmEmail)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('ConfirmNumber', () => {
  it('should render correctly', () => {
    wrapper = mount(ConfirmNumber)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

