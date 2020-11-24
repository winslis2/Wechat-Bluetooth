var isConnectting = false;
var connectDeviceIndex = 0;
var discoveryDevicesTimer=10000;
Page({
  data: {
    buttonText:"连接LeArm",
    serviceId:"0000ffe0-0000-1000-8000-00805f9b34fb",
    characterId_write:"0000ffe1-0000-1000-8000-00805f9b34fb",
    characterId_read:"0000ffe1-0000-1000-8000-00805f9b34fb",
    deviceId:"",
    value1:1500,
    value2: 1500,
    value3: 1500,
    value4: 1500,
    value5: 1500,
    value6: 1500
  },

  sliderchange: function (event) {
    switch (event.target.dataset.id)
    {
      case 1: this.setData({ value1: event.detail.value});break;
      case 2: this.setData({ value2: event.detail.value }); break;
      case 3: this.setData({ value3: event.detail.value }); break;
      case 4: this.setData({ value4: event.detail.value }); break;
      case 5: this.setData({ value5: event.detail.value }); break;
      case 6: this.setData({ value6: event.detail.value }); break;
    }
    console.log(event.target.dataset.id);
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = event.target.dataset.id;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  slider2change: function (event) {
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = 0x02;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  slider3change: function (event) {
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = 0x03;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  slider4change: function (event) {
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = 0x04;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  slider5change: function (event) {
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = 0x05;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  slider6change: function (event) {
    var that = this;
    var cmd = new ArrayBuffer(10);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x08;
    uint8Arry[3] = 0x03;
    uint8Arry[4] = 0x01;
    uint8Arry[5] = 0x96;
    uint8Arry[6] = 0x00;
    uint8Arry[7] = 0x06;
    uint8Arry[8] = event.detail.value & 0x00ff;
    uint8Arry[9] = (event.detail.value >> 8) & 0x00ff;;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    })
  },

  bluetoothClick: function (event) {
    this.startConnect();
  },

  resetClick:function(event){
    this.setData({ value1: 1500});
    this.setData({ value2: 1500 });
    this.setData({ value3: 1500 });
    this.setData({ value4: 1500 });
    this.setData({ value5: 1500 });
    this.setData({ value6: 1500 });
    var that = this;
    var cmd = new ArrayBuffer(4);
    var uint8Arry = new Uint8Array(cmd);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x02;
    uint8Arry[3] = 0x07;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd,
      success: function (res) { },
    });

    var cmd2 = new ArrayBuffer(7);
    var uint8Arry = new Uint8Array(cmd2);
    uint8Arry[0] = 0x55;
    uint8Arry[1] = 0x55;
    uint8Arry[2] = 0x05;
    uint8Arry[3] = 0x06;
    uint8Arry[4] = 0x00;
    uint8Arry[5] = 0x01;
    uint8Arry[6] = 0x00;
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.characterId_write,
      value: cmd2,
      success: function (res) { },
    });
  },

  startConnect: function () {
    var that = this;
    wx.showLoading({
      title: '开启蓝牙适配'
    });
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log("初始化蓝牙适配器");
        console.log(res);
        that.getBluetoothAdapterState();
      },
      fail: function (err) {
        console.log(err);
        wx.showToast({
          title: '蓝牙初始化失败',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    });

    wx.onBluetoothAdapterStateChange(function (res) {
      var available = res.available;
      if (available) {
        that.getBluetoothAdapterState();
      }
    })
  },

  getBluetoothAdapterState: function () {
    var that = this;
    wx.getBluetoothAdapterState({
      success: function (res) {
        var available = res.available,
          discovering = res.discovering;
        if (!available) {
          wx.showToast({
            title: '设备无法开启蓝牙连接',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
        }
        else {
          if (!discovering) {
            that.startBluetoothDevicesDiscovery();
            that.getConnectedBluetoothDevices();
          }
        }
      }
    })
  },

  startBluetoothDevicesDiscovery: function () {
    var that = this;
    wx.showLoading({
      title: '蓝牙搜索'
    });
    wx.startBluetoothDevicesDiscovery({
      services: [],
      allowDuplicatesKey: false,
      success: function (res) {
        if (!res.isDiscovering) {
          that.getBluetoothAdapterState();
        }
        else {
          that.onBluetoothDeviceFound();
        }
      },
      fail: function (err) {
        console.log(err);
      }
    });
  },

  getConnectedBluetoothDevices: function () {
    var that = this;
    wx.getConnectedBluetoothDevices({
      services: [that.data.serviceId],
      success: function (res) {
        console.log("获取处于连接状态的设备", res);
        var devices = res['devices'],
          flag = false,
          index = 0,
          conDevList = [];
        devices.forEach(function (value, index, array) {
          if (value['name'].indexOf('LeArm') != -1) {
            // 如果存在包含Robo-Soul字段的设备
            flag = true;
            index += 1;
            conDevList.push(value['deviceId']);
            //that.data.deviceId = value['deviceId'];
            that.setData({ deviceId: value['deviceId']});
            return;
          }
        });
        if (flag) {
          this.connectDeviceIndex = 0;
          that.loopConnect(conDevList);
        }
        else {
          if (!this.getConnectedTimer) {
            that.getConnectedTimer = setTimeout(function () {
              that.getConnectedBluetoothDevices();
            }, 5000);
          }
        }
      },
      fail: function (err) {
        if (!this.getConnectedTimer) {
          that.getConnectedTimer = setTimeout(function () {
            that.getConnectedBluetoothDevices();
          }, 5000);
        }
      }
    });
  },

  startConnectDevices: function (ltype, array) {
    var that = this;
    clearTimeout(that.getConnectedTimer);
    that.getConnectedTimer = null;
    clearTimeout(that.discoveryDevicesTimer);
    //that.stopBluetoothDevicesDiscovery();
    this.isConnectting = true;
    wx.createBLEConnection({
      deviceId: that.data.deviceId,
      success: function (res) {
        if (res.errCode == 0) {
          setTimeout(function () {
            that.getService(that.data.deviceId);
          }, 5000)
        }
      },
      fail: function (err) {
        console.log('连接失败：', err);
        if (ltype == 'loop') {
          that.connectDeviceIndex += 1;
          that.loopConnect(array);
        }
        else {
          that.startBluetoothDevicesDiscovery();
          //that.getConnectedBluetoothDevices();
        }
      },
      complete: function () {
        console.log('complete connect devices');
        this.isConnectting = false;
      }
    });
  },

  getService: function (deviceId) {
    var that = this;
    // 监听蓝牙连接
    wx.onBLEConnectionStateChange(function (res) {
      console.log(res);
    });
    // 获取蓝牙设备service值
    wx.getBLEDeviceServices({
      deviceId: deviceId,
      success: function (res) {
        that.getCharacter(deviceId, res.services);
      }
    })
  },

  startConnect: function () {
    var that = this;
    wx.showLoading({
      title: '开启蓝牙适配'
    });
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log("初始化蓝牙适配器");
        console.log(res);
        that.getBluetoothAdapterState();
      },
      fail: function (err) {
        console.log(err);
        wx.showToast({
          title: '蓝牙初始化失败',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    });
    wx.onBluetoothAdapterStateChange(function (res) {
      var available = res.available;
      if (available) {
        that.getBluetoothAdapterState();
      }
    })
  },

  getBluetoothAdapterState: function () {
    var that = this;
    wx.getBluetoothAdapterState({
      success: function (res) {
        var available = res.available,
          discovering = res.discovering;
        if (!available) {
          wx.showToast({
            title: '设备无法开启蓝牙连接',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
        }
        else {
          if (!discovering) {
            that.startBluetoothDevicesDiscovery();
            //that.getConnectedBluetoothDevices();
          }
        }
      }
    })
  },

  startBluetoothDevicesDiscovery: function () {
    var that = this;
    wx.showLoading({
      title: '蓝牙搜索'
    });
    wx.startBluetoothDevicesDiscovery({
      services: [],
      allowDuplicatesKey: false,
      success: function (res) {
        if (!res.isDiscovering) {
          that.getBluetoothAdapterState();
        }
        else {
          that.onBluetoothDeviceFound();
        }
      },
      fail: function (err) {
        console.log(err);
      }
    });
  },

  getConnectedBluetoothDevices: function () {
    var that = this;
    wx.getConnectedBluetoothDevices({
      services: [that.data.serviceId],
      success: function (res) {
        console.log("获取处于连接状态的设备", res);
        var devices = res['devices'],
          flag = false,
          index = 0,
          conDevList = [];
        devices.forEach(function (value, index, array) {
          if (value['name'].indexOf('LeArm') != -1) {
            // 如果存在包含Robo-Soul字段的设备
            flag = true;
            index += 1;
            conDevList.push(value['deviceId']);
            that.setData({ deviceId: value['deviceId'] });
            return;
          }
        });
        if (flag) {
          this.connectDeviceIndex = 0;
          that.loopConnect(conDevList);
        }
        else {
          if (!this.getConnectedTimer) {
            that.getConnectedTimer = setTimeout(function () {
              that.getConnectedBluetoothDevices();
            }, 5000);
          }
        }
      },
      fail: function (err) {
        if (!this.getConnectedTimer) {
          that.getConnectedTimer = setTimeout(function () {
            that.getConnectedBluetoothDevices();
          }, 5000);
        }
      }
    });
  },

  onBluetoothDeviceFound: function () {
    wx.hideLoading();
    var that = this;
    console.log('onBluetoothDeviceFound');
    wx.onBluetoothDeviceFound(function (res) {
      console.log('new device list has founded')
      console.log(res);
      if (res.devices[0]) {
        var name = res.devices[0]['name'];
        if (name != '') {
          if (name.indexOf('LeArm') != -1) {
            var deviceId = res.devices[0]['deviceId'];
            that.setData({ deviceId:deviceId});
            console.log(that.data.deviceId);
            that.startConnectDevices();
          }
        }
      }
    })
  },

  startConnectDevices: function (ltype, array) {
    wx.showToast({
      title: 'LeArm已找到',
      icon: 'success',
      duration: 2000
    });
    setTimeout(function () {
      wx.hideToast()
    }, 2000);
    var that = this;
    clearTimeout(that.getConnectedTimer);
    that.getConnectedTimer = null;
    clearTimeout(that.discoveryDevicesTimer);
    //that.stopBluetoothDevicesDiscovery();
    this.isConnectting = true;
    wx.createBLEConnection({
      deviceId: that.data.deviceId,
      success: function (res) {
        if (res.errCode == 0) {
          setTimeout(function () {
            that.getService(that.data.deviceId);
          }, 5000)
        }
        that.setData({ buttonText: '断开LeArm' });
        wx.showToast({
          title: '连接成功',
          icon: 'success',
          duration: 2000
        });
        setTimeout(function () {
          wx.hideToast()
        }, 2000);
      },
      fail: function (err) {
        wx.showToast({
          title: '连接失败',
          icon: 'none',
          duration: 2000
        });
        setTimeout(function () {
          wx.hideToast()
        }, 2000);
        that.setData({ buttonText: '连接LeArm' });
        console.log('连接失败：', err);
        if (ltype == 'loop') {
          that.connectDeviceIndex += 1;
          that.loopConnect(array);
        }
        else {
          that.startBluetoothDevicesDiscovery();
          that.getConnectedBluetoothDevices();
        }
      },
      complete: function () {
        
        console.log('complete connect devices');
        this.isConnectting = false;
      }
    });
  },

  getService: function (deviceId) {
    var that = this;
    // 监听蓝牙连接
    wx.onBLEConnectionStateChange(function (res) {
      console.log(res);
    });
    // 获取蓝牙设备service值
    wx.getBLEDeviceServices({
      deviceId: deviceId,
      success: function (res) {
        that.getCharacter(deviceId, res.services);
      }
    })
  },

  getCharacter: function (deviceId, services) {
    var that = this;
    wx.getBLEDeviceCharacteristics({
      deviceId: deviceId,
      serviceId: that.data.serviceId,
      success: function (res) {
        wx.notifyBLECharacteristicValueChange({
          deviceId: deviceId,
          serviceId: that.data.serviceId,
          characteristicId: that.data.characterId_write,
          state: true,
          success: function (res) { console.log("注册通知成功") },
        })
      },
      fail: function (err) {
        console.log(err);
      },
      complete: function () {
        console.log('complete');
      }
    })

  },

  loopConnect: function (devicesId) {
    var that = this;
    var listLen = devicesId.length;
    if (devicesId[this.connectDeviceIndex]) {
      that.setData({ deviceId: devicesId[this.connectDeviceIndex]});
      this.startConnectDevices('loop', devicesId);
    }
    else {
      console.log('已配对的设备小程序蓝牙连接失败');
      that.startBluetoothDevicesDiscovery();
      that.getConnectedBluetoothDevices();
    }
  },

  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {
    wx.closeBluetoothAdapter({
      success: function (res) {
        console.log(res)
      }
    })
  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  }
})		