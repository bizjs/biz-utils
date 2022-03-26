import _isEmail from 'validator/es/lib/isEmail';
import _isMobilePhone from 'validator/es/lib/isMobilePhone';
import _isIP from 'validator/es/lib/isIP';
import _isURL from 'validator/es/lib/isURL';

const CHINESE_LOCALE_CODE = 'zh-CN';

/**
 * 是否是中国手机号码
 * @param phoneNumber
 * @returns
 */
export function isChinesePhoneNumber(phoneNumber: string): boolean {
  return _isMobilePhone(phoneNumber, CHINESE_LOCALE_CODE);
}

/**
 * 是否是中国座机号码
 * 座机号规则：区号（可选，一个 0 加上 2~3 位数字）+ 固定电话（7~8 位数字）+分机号（可选）
 * 详细规则见：
 * @param landlineNumber
 */
export function isChineseLandlineNumber(landlineNumber: string): boolean {
  const LANDLINE_REG = /^(0\d{2,3}\-)?(\d{7,8})(\-\d{1,6})?$/;
  return LANDLINE_REG.test(landlineNumber);
}

/**
 * 是否是邮箱地址
 * @param email
 * @returns
 */
export function isEmail(email: string): boolean {
  return _isEmail(email);
}

/**
 * 是否是中国身份证号
 * 代码来自：validator/es/lib/isIdentityCard/zh-CN
 * @param idCard
 */
export function isIdCardNo(idCard: string): boolean {
  const provincesAndCities = [
    '11', // 北京
    '12', // 天津
    '13', // 河北
    '14', // 山西
    '15', // 内蒙古
    '21', // 辽宁
    '22', // 吉林
    '23', // 黑龙江
    '31', // 上海
    '32', // 江苏
    '33', // 浙江
    '34', // 安徽
    '35', // 福建
    '36', // 江西
    '37', // 山东
    '41', // 河南
    '42', // 湖北
    '43', // 湖南
    '44', // 广东
    '45', // 广西
    '46', // 海南
    '50', // 重庆
    '51', // 四川
    '52', // 贵州
    '53', // 云南
    '54', // 西藏
    '61', // 陕西
    '62', // 甘肃
    '63', // 青海
    '64', // 宁夏
    '65', // 新疆
    '71', // 台湾
    '81', // 香港
    '82', // 澳门
    '91', // 国外
  ];
  const powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
  const parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

  const judgeUtils = {
    checkAddressCode(addressCode: string) {
      return provincesAndCities.includes(addressCode);
    },
    checkBirthDayCode(birDayCode: string) {
      var yyyy = parseInt(birDayCode.substring(0, 4), 10);
      var mm = parseInt(birDayCode.substring(4, 6), 10);
      var dd = parseInt(birDayCode.substring(6), 10);
      var xdata = new Date(yyyy, mm - 1, dd);

      if (xdata > new Date()) {
        return false; // eslint-disable-next-line max-len
      } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
        return true;
      }

      return false;
    },
    getParityBit(idCardNo: string) {
      var id17 = idCardNo.substring(0, 17);
      var power = 0;

      for (var i = 0; i < 17; i++) {
        power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
      }

      var mod = power % 11;
      return parityBit[mod];
    },
    checkParityBit(idCardNo: string) {
      return judgeUtils.getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
    },
    check15IdCardNo(idCardNo: string) {
      var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
      if (!check) return false;
      var addressCode = idCardNo.substring(0, 2);
      check = judgeUtils.checkAddressCode(addressCode);
      if (!check) return false;
      var birDayCode = '19'.concat(idCardNo.substring(6, 12));
      check = judgeUtils.checkBirthDayCode(birDayCode);
      if (!check) return false;
      return true;
    },
    check18IdCardNo(idCardNo: string) {
      var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(
        idCardNo,
      );
      if (!check) return false;
      var addressCode = idCardNo.substring(0, 2);
      check = judgeUtils.checkAddressCode(addressCode);
      if (!check) return false;
      var birDayCode = idCardNo.substring(6, 14);
      check = judgeUtils.checkBirthDayCode(birDayCode);
      if (!check) return false;
      return judgeUtils.checkParityBit(idCardNo);
    },
    checkIdCardNo(idCardNo: string) {
      var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
      if (!check) return false;

      if (idCardNo.length === 15) {
        return judgeUtils.check15IdCardNo(idCardNo);
      }

      return judgeUtils.check18IdCardNo(idCardNo);
    },
  };

  return judgeUtils.checkIdCardNo(idCard);
}

export function isIpV6(ip: string): boolean {
  return _isIP(ip, 6);
}

export function isIpV4(ip: string): boolean {
  return _isIP(ip, 4);
}

export function isURL(url: string): boolean {
  return _isURL(url);
}
