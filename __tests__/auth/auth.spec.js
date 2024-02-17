import { describe, it, expect, beforeAll, vi} from 'vitest'
import { mount, shallowMount } from "@vue/test-utils"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import AuthWith from '@/components/elements/auth/AuthWith.vue'
import { useAuth } from '@/stores/auth.store';


let wrapper;
beforeAll(() => {
  const app = createApp();
  const pinia = createPinia();
  app.use(pinia);

  wrapper = shallowMount(AuthWith, {
    global: {
      plugins: [pinia],
    },
  });
})

describe('AuthWith', async () => {
  it('should auth with oAuth2.0 (google)', async () => {
    const auth = useAuth()
    const spyUserLoginWithGoogle = vi.spyOn(auth, 'userLoginWithGoogle')
    spyUserLoginWithGoogle.mockImplementation(() => Promise.resolve())
    wrapper = mount(AuthWith)
    await wrapper.find('.btn img').trigger('click')
    expect(spyUserLoginWithGoogle).toHaveBeenCalled()
    spyUserLoginWithGoogle.mockRestore()
  })
})
