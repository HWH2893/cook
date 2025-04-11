Page({
  data: {
    searchValue: '',
    hotSearchList: ['001', '002'],
    historySearchList: [],
    resultList: [],
    showHotSearch: true,
    showHistorySearch: true,
    showSearchResult: false,
    showEmptyResult: false
  },

  onLoad() {
    this.loadHistorySearch();
  },

  handleInput(e) {
    this.setData({ searchValue: e.detail.value });
  },

  clearInput() {
    this.setData({
      searchValue: '',
      showHotSearch: true,
      showHistorySearch: true,
      showSearchResult: false,
      showEmptyResult: false
    });
  },

  handleSearch() {
    const keyword = this.data.searchValue.trim();
    if (!keyword) {
      wx.showToast({ title: '请输入搜索内容', icon: 'none' });
      return;
    }
    this.saveSearchHistory(keyword);
    this.realSearch(keyword);
  },

  saveSearchHistory(keyword) {
    let history = wx.getStorageSync('searchHistory') || [];
    history = history.filter(item => item !== keyword);
    history.unshift(keyword);
    if (history.length > 10) {
      history = history.slice(0, 10);
    }
    wx.setStorageSync('searchHistory', history);
    this.setData({ historySearchList: history });
  },

// cook/miniprogram/pages/search/index.js
realSearch(keyword) {
  wx.showLoading({ title: '搜索中...' });
  wx.request({
      // 修改 URL 以匹配后端接口
      url: `http://127.0.0.1:8000/api/v1/recipes/search?word=${keyword}`, 
      method: 'GET',
      timeout: 5000,
      success: (res) => {
          wx.hideLoading();
          if (res.data.length > 0) {
              this.setData({
                  resultList: res.data,
                  showHotSearch: false,
                  showHistorySearch: false,
                  showSearchResult: true,
                  showEmptyResult: false
              });
          } else {
              this.setData({
                  resultList: [],
                  showHotSearch: false,
                  showHistorySearch: false,
                  showSearchResult: false,
                  showEmptyResult: true
              });
          }
      },
      fail: (err) => {
          wx.hideLoading();
          console.error(err);
          wx.showToast({ title: '搜索失败', icon: 'none' });
      }
  });
},

  handleTagTap(e) {
    const keyword = e.currentTarget.dataset.keyword;
    this.setData({ searchValue: keyword });
    this.handleSearch();
  },

  clearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定要清空历史搜索记录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('searchHistory');
          this.setData({ historySearchList: [] });
        }
      }
    });
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  }
});