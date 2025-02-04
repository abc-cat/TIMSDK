// eslint-disable-next-line no-undef
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: Object,
      value: {},
      observer(newVal) {
        this.setData({
          message: newVal,
        });
      },
    },
    isMine: {
      type: Boolean,
      value: true,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    message: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    resendMessage(e) {
      this.triggerEvent('resendMessage', {
        message: e.currentTarget.dataset.value.payload.text,
      });
    },
  },
});
