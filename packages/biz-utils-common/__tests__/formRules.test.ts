import { isChineseLandlineNumber, isChinesePhoneNumber, isEmail, isIdCardNo, isIpV4, isIpV6, isURL } from '../src';

describe('formRules test', () => {
  describe('isChineseLandlineNumber test', () => {
    it('isChineseLandlineNumber should return true', () => {
      const validLandlineNumbers = ['028-12345678', '028-86968696', '0825-5182511'];
      validLandlineNumbers.forEach(item => {
        expect(isChineseLandlineNumber(item)).toBe(true);
      });
    });
    it('isChineseLandlineNumber should return false', () => {
      const invalidLandlineNumbers = ['0281234567', '0825_51812511'];
      invalidLandlineNumbers.forEach(item => {
        expect(isChineseLandlineNumber(item)).toBe(false);
      });
    });
  });

  describe('isChinesePhoneNumber test', () => {
    it('isChinesePhoneNumber should return true', () => {
      const validPhoneNumbers = ['13778873633', '13670028751', '18980713488'];
      validPhoneNumbers.forEach(item => {
        expect(isChinesePhoneNumber(item)).toBe(true);
      });
    });
    it('isChinesePhoneNumber should return false', () => {
      const invalidPhoneNumbers = ['0281234567', '136700287511'];
      invalidPhoneNumbers.forEach(item => {
        expect(isChinesePhoneNumber(item)).toBe(false);
      });
    });
  });

  describe('isEmail test', () => {
    it('isEmail should return true', () => {
      const validEmails = ['11@11.org', 'hi@qq.com.cn', '222@qq.com', 'xxx+1@gmail.com'];
      validEmails.forEach(item => {
        expect(isEmail(item)).toBe(true);
      });
    });
    it('isEmail should return false', () => {
      const invalidEmails = ['qqq@1', '2222.com'];
      invalidEmails.forEach(item => {
        expect(isEmail(item)).toBe(false);
      });
    });
  });

  describe('isIdCardNo test', () => {
    it('isIdCardNo should return true', () => {
      // 规则比较严格，需要正式的身份证号验证
      // 网上身份证号来源：http://list.chineseidcard.com/sfz/510000.html
      const validItems = [
        '230523198910304814',
        '210203197503102721',
        '51343519570601092X',
        '51343519570601092x', // 最后一位是 x 的身份证
        '320311770706001', // 15 位身份证
      ];
      validItems.forEach(item => {
        expect(isIdCardNo(item)).toBe(true);
      });
    });
    it('isIdCardNo should return false', () => {
      const invalidItems = [
        '',
        '230523198910304810',
        '5555555555555555555',
        '51343519570601092A',
        '210203299903102721', // 生日大于当前日期，2999-03-10
        '210203197500102721', // 月份或者天错误，1975-13-10
        '210203197503102720',
      ];
      invalidItems.forEach(item => {
        expect(isIdCardNo(item)).toBe(false);
      });
    });
  });

  describe('isIpV4 test', () => {
    it('isIpV4 should return true', () => {
      const validItems = ['0.0.0.0', '255.255.255.255', '0.255.0.255', '127.0.0.1', '192.0.0.1'];
      validItems.forEach(item => {
        expect(isIpV4(item)).toBe(true);
      });
    });
    it('isIpV4 should return false', () => {
      const invalidItems = ['0.0.0.256', '192.0.0', '999', '1234.0.0.1'];
      invalidItems.forEach(item => {
        expect(isIpV4(item)).toBe(false);
      });
    });
  });

  describe('isIpV6 test', () => {
    it('isIpV6 should return true', () => {
      // 测试数据来自：https://baike.baidu.com/item/IPv6%E5%9C%B0%E5%9D%80/5324921
      const validItems = [
        '2001:0DB8:02de::0e13',
        '2001:DB8:2de::e13',
        '2000:0:0:0:0:0:0:1',
        'CDCD:910A:2222:5498:8475:1111:3900:2020',
        '1030::C9B4:FF12:48AA:1A2B',
      ];
      validItems.forEach(item => {
        expect(isIpV6(item)).toBe(true);
      });
    });
    it('isIpV6 should return false', () => {
      const invalidItems = ['', '0.0.0.256', '192.0.0', '999', '1234.0.0.1'];
      invalidItems.forEach(item => {
        expect(isIpV6(item)).toBe(false);
      });
    });
  });

  describe('isURL test', () => {
    it('isURL should return true', () => {
      // 必须要包含协议才算
      const validItems = [
        'https://baike.baidu.com/item/IPv6%E5%9C%B0%E5%9D%80/5324921',
        'http://192.168.0.1',
        'https://t.hstar.vip/a/b/c',
      ];
      validItems.forEach(item => {
        expect(isURL(item)).toBe(true);
      });
    });
    it('isURL should return false', () => {
      const invalidItems = [
        '',
        '192.168.0.1',
        't.hstar.vip', // 不带协议，异常
        'https://a:b@t.hstar.vip/a/b/c', // 带上了认证，异常
      ];
      invalidItems.forEach(item => {
        expect(isURL(item)).toBe(false);
      });
    });
  });
});
