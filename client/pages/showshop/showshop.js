// pages/showshop/showshop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    allUrl: [{
        url_0: "https://sz-ctfs.ftn.qq.com/ftn_handler/711c0793fb81ae0458eea279880a6bf5a9f782015c47f9fb98c488ad6a49cc88d022d9ce778802fa9acf861365a4e2b466e8016e695a546be8c4868f7d899843/?fname=201096572471679349.jpg&k=293064613759cb9dc827a4dd1161074d06015752035504574f095305054c0106060249030e050d4f50095c000f020d575406500537773550520154580154025056075557005806565b1e0e11506108&code=b0da7a5b&fr=00&&txf_fid=43a015ce75e95dbf40df6d1e9622ce6971760ca1&xffz=116736",
        url_1: "https://sz-ctfs.ftn.qq.com/ftn_handler/9d09cd20fe7a371297388d933f5aff2ab9a19d6aa65669935c15f2d68a3484020bfe12eee495320e850dc6c0f2682f076c359bb3f474e0a84d52cd78504fbf45/?fname=837144703034958709.jpg&k=7a383562fbd19fc79b2ff5de43615017500f0556510701091c0b5606064c560e530c180301035415000f57565153575b5008505465776200020f04565156520b010b015b5059550808165f1202615f&code=185beab8&fr=00&&txf_fid=e98afef6973c4fd29a7d7ede9a99c61650ffaa7a&xffz=151394",
        url_2: "https://sz-ctfs.ftn.qq.com/ftn_handler/44b5d5057b16139973f9436f60f15ffbd8a60215e6880df6d312794ecfa22ff28ea86609f15c8094073d7b15872b19e8d3498de2ccb92bdce6aa2a9858167ca8/?fname=508458309500498121.jpg&k=79366161347898cb9821a1dd1e39541b54070305085803571f0758540014525207574c590a0d541905035204005a53010a550752382f6601020e5554000a560d070651550101570603180b115f395b&code=26aa89f4&fr=00&&txf_fid=87aacb5476e726b9c80098118d359580504d7bd3&xffz=114420",
        url_3: "https://sz-ctfs.ftn.qq.com/ftn_handler/81235180dac1ba8a7f977039f0949b10e4aba7971f5cf8f6d2376bb3dde7a525afb16d5f7c0f87457ddbddef296735996aecd2a3db05cbeaa3be1b4aa8f0b59a/?fname=384710872981298954.jpg&k=7e326164326dc89a9f25a1d81464044a010002550501525c180652515049025605064c0601000248505058050600060000010253327236560d065655025c01570c0a50560b5c0f50011c0b1455640b&code=52ad2d6e&fr=00&&txf_fid=5cab00098dcf6074d5c8961b582173ba97160be1&xffz=128768"

      },
      {
        url_0: 'https://sz-ctfs.ftn.qq.com/ftn_handler/1f5a2694e31c2ba3e51889cc3d6342ce33d0d7d2e79fcada294410085a1b43e4ddaa955c802311ae82074aa0579eb035221699ad420b8afe5c116215e2046d46/?fname=420066890786567294.jpg&k=72396139aae19dce932ea1854066531e085c520d5e555706145a530a514b550900004c5b0002031c090a505807035505580a070b667061050b09510f505e58010e01570c505153080d170b4901665c&code=99a9ffa1&fr=00&&txf_fid=491448ea534a5c4456ee3a657c801288a2aed66a&xffz=227380',
        url_1: "https://sz-ctfs.ftn.qq.com/ftn_handler/2d65c3a10f6ce582ce720bff05768d9cef87b84447fbf28e45356775ce6d6bd1222c6b148a9718b992ade26e90353fff8d67891e6e423e9c303910b3ce5d2190/?fname=771656441734331049.jpg&k=7f366564513bc8cd9e21a5d81430041d030254545308015019520155531d02510652485d5304531f52045000010853535703560532263605030753510404020303055157010106060d180f1455300b&code=46ed2062&fr=00&&txf_fid=adb7534c0f65daa52a06ef73aacea5975d452aa3&xffz=128157",
        url_2: "https://sz-ctfs.ftn.qq.com/ftn_handler/3164911cca4e5ac8e32900d1b848aa5a187a1bafb7a78af8bf0c22f71ec3b55a9901256326dd288a630e44c683fc3b2e53183c89bb33ea39762b37fad2eb5c25/?fname=473655711234019182.jpg&k=2a373439fc57c9cacb20f4851064051a50510c0e540756044c00075d0f4903015855195b000656180252070d065c00065300520c367237015604020c0353060453040009075d060d53195e4951640a&code=a7496d75&fr=00&&txf_fid=92cdc1df884178f35c423dbd9b3695b50dc122f7&xffz=117814",
        url_3: "https://sz-ctfs.ftn.qq.com/ftn_handler/d7332a8deb45d7c95ee712c61a7396421ce6c77fa8cfdd5af9f1557099604a186fe4d0ef343d4233f64c4ea474fe3f85d7c710fadd49ba4de9703d1a1b22d0cf/?fname=220864436112572199.jpg&k=73613031cb86cc9b9276f08d4230034b595609085009040215590900571d05565b591d535d040249090505525d03090200050406642631560a51080750040252095002045302005d014f5a4103300c&code=8a01d01d&fr=00&&txf_fid=ac7b7cf562c636d04d01e8278c34eff9515a61d6&xffz=149841",
      },
      {
        url_0: "https://sz-ctfs.ftn.qq.com/ftn_handler/787e65eb9de9a650cea7a8cf9e6ab09b8b9975488c7b3b3a286398dc301d4aadf7a0f61725f570d54a0c2ee466cd21d58f5093fe9b7aae59f4cb3a1131f0bf32/?fname=293162845487986877.jpg&k=7b316231a7cdcbc89a26a28d1f630418065351570f5505021d045053094e020106064f080f53001a520800050c06020f07065b5539753605090253070b5b02020409550801550e00071f08415e630b&code=01b19c67&fr=00&&txf_fid=fe9c4b12284e3ef7b5114e4d176671ec0a2b4bae&xffz=151906",
        url_1: "https://sz-ctfs.ftn.qq.com/ftn_handler/180c19a4481f562e00d54d062a0bd74c75514bd9da6efb12c477a4f860723725d87c316feb5ce27f860d05c9ffc4a12d32b56e1e28dcf3afe75d201a35594c7c/?fname=861107314535307403.jpg&k=2e333365424699cecf24f3d94061541e535604515159520048060701034c520751501e070705021c56000155545254520003015d6677660953020255515257055000065656565201561d591501615b&code=e33efaf1&fr=00&&txf_fid=07eac7f5ad65db6853038ec965500e0b9102719b&xffz=55516",
        url_2: "https://sz-ctfs.ftn.qq.com/ftn_handler/3b866fae9e5a03c485e31a9857d9fd51f0a8a589a65c4694f3193883885d266587c7fe143fcf6446d6f0600fc0a299d08a061af35c54e2f154b5b8ca0f60dabd/?fname=699864588316463391.jpg&k=73633432f728c9999274f48e456106495a0557070553000215535106064c0057005b190b00560d4b0f06520201020355595b0c5063773450015a0c0457540c5e0b5202065552075f094d5e42046109&code=8c42ca4f&fr=00&&txf_fid=82147f9f463568894ea453fd96d92e33d292edac&xffz=177772",
        url_3: "https://sz-ctfs.ftn.qq.com/ftn_handler/34ff8ade617199c507d34c914564b9a5fd3e44ce92fdf34e4672bf515b24f40897019881663de8c8fad997b91ecf0eb1ee0236bdb161139a258c8f07b868e6cc/?fname=157165063444359814.jpg&k=7a3034633cef99ca9b27f4df1134561a0955040602075c071c080554061950560304195a550750180004525a030d06560606555537226404040705550204520605040050020d5c04051e5e13503459&code=104c74d5&fr=00&&txf_fid=4649339eaf3d16c46f58bd74e57df170f5caf3b6&xffz=140533"
      },
      {
        url_0: "https://sz-ctfs.ftn.qq.com/ftn_handler/b25fcdd04ced9b9a9d1aaa07197136e659241ed6951ab3aa66685a10cb57e56f720c7f653f0c5002845d19d774912a774871019368a20a6de2e189e4ba3938c3/?fname=186146479999175142.jpg&k=7f6662643c39cd9b9e71a2d81237004b0c5754510200050019025356051a06560c534f065703534957525a51020e010507525506342132550c5053500203055d0d5f5b55030203500648081453370f&code=4fbd472d&fr=00&&txf_fid=dd482c8148e3251caef641e3bafacfabdc0a383f&xffz=61944",
        url_1: "https://sz-ctfs.ftn.qq.com/ftn_handler/f62a9e0f523ac155f19b745cdf2264adf16663f21a6fb1c6befdbeb4339e70200294b2e30eb9af2e4fdc8c29faae742a186c4d7d6c2cda12146cf637b7ef4452/?fname=254724530252926796.jpg&k=78303533b157c4cd9927f58f40300b1d0b05560350540a0a1e02020a5f1d0d535009185155075b1f020253000009090204080000662639000604020152050a020105070a54060e0b051e5f43013004&code=3053f092&fr=00&&txf_fid=f1ec90e8e425e6b9454d8488f001dfb4d264b1ce&xffz=170025",
        url_2: "https://sh-btfs.ftn.qq.com/ftn_handler/54fa2cba2adffcada2fe4767577ef3c311ec43e38979a2fa3a9a8b06172735b4cd91001b32d66c147ad7754c9f11e238b129a2a7e2f21592d1632c87a7086586/?fname=249737408691299104.jpg&k=7c3238610b30cacd9d25f8dd1139061d02005e58010f06531a055a56551400560e0b15000e09571f02575c57550e0d02020b0059372f3400030b0f52000d040a010b09530e000502031c5211503909&code=728a7942&fr=00&&txf_fid=4ed94a59c3f6f1af2036126711207050d5e9e9f5&xffz=128708",
        url_3: "https://sz-btfs.ftn.qq.com/ftn_handler/39ae17f0a1ccf267038af3cca539e611941d3d9af4290db764ccadfaa85ee6e91fc0786bec54f3109a50c5ad6596f3be924a05fcfe8d3d62829730f148b17a99/?fname=857791345771496191.jpg&k=79383265fb6dcec7982ff2d943650217060156525d5400001f5e505706480400040c1f5c52000615500f0b0707515508535d070065733000070f055c5456040d050f03515c5301010316581502650d&code=282eee08&fr=00&&txf_fid=f93efdcc2ad091db2e767ee334fd667f4ee9bdf0&xffz=128866"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var urls = that.data.allUrl
    var showUrl = []
    var index = options.index
    // for (var i = 0; i < 4; i++) {
    showUrl.push(urls[index].url_0)
    showUrl.push(urls[index].url_1)
    showUrl.push(urls[index].url_2)
    showUrl.push(urls[index].url_3)
    // }
    that.setData({
      imgUrls: showUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})