import type { Ref } from 'vue';
/**
 * 动态增加数字到目标
 * @param startNum Ref 代理 开始为0
 * @param endNum 目标数字
 * @param duration 持续时长
 * @param start 非代理 开始为0 应等于 startNum.value
 * @returns
 */
export function animateNumber(startNum: Ref<number>, endNum: number, duration = 200, start = 0) {
  const d = duration / 60;
  const f = Math.floor((endNum - startNum.value) / d);
  if (startNum.value !== start) return;
  if (startNum.value === endNum || startNum.value > endNum) {
    startNum.value = endNum;
    return;
  } else {
    startNum.value += f;
    setTimeout(() => {
      animateNumber(startNum, endNum, duration - 60, startNum.value);
    }, 60);
  }
}

export function debounceFn(this: any, fn: Function, delay = 200) {
  let timer: any = null;
  return (...rest: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.call(this, ...rest);
    }, delay);
  };
}

// 分割24小时step分钟间隔
export const powerChartX = (date: string, step = 15) => {
  const max = 24;
  let start = 0;
  const arr: string[] = [];
  while (start < max) {
    for (let i = 0; i < Math.floor(60 / step); i++) {
      const hour = start < 10 ? '0' + start : start + '';
      const minute = i * step < 10 ? '0' + i * step : i * step + '';
      arr.push(date + ' ' + (i === 0 ? hour + ':' + '00' : hour + ':' + minute));
    }
    start++;
  }
  return arr;
};

export const Color = {
  _DISABLED_BG: '#0c3254',
  _DISABLED_COLOR: '#C0C4CC',
  _HOVER_BG: '#fff700',
  _HOVER_COLOR: '#222222',
  _NORMAL_COLOR: '#ffffff',
  _NORMAL_BG: '#0373ce',
  _SELECT_COLOR: '#222222',
  _SELECT_BG: '#fff700',
};

export const _TYPE_COLOR = [Color._NORMAL_BG, '#E6A23C', '#F56C6C'];

export const toolTipFormatter = (
  params: any
) => {
  // unit添加的单位
  let htmlStr = '<div style="padding:5px 3px">';
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    const xName = param.name; // x轴的名称
    const seriesName = param.seriesName; // 图例名称
    const value = param.value; // y轴值
    const color = param.color; // 图例颜色
    if (i === 0) {
      htmlStr += `${xName}<br/>`;
    }
    if (value) {
      htmlStr += `
        <div style="display:flex">
          <div style="width:10px;height:10px;border-radius: 50%;margin:6px 4px 0 0;background:
          ${typeof color === 'string' ? color : color.colorStops[0].color}"></div>
          <div style="flex:1;display:flex; justify-content: space-between;width:100%;">${seriesName}：<span style="font-weight: bold;">${value + (seriesName==='负荷投运率' ? '%' : 'MW')}</span></div>
        </div>
      `;
    }
  }
  htmlStr += `</div>`;
  return htmlStr;
};
