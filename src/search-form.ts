import { renderBlock } from './lib.js'

export function renderSearchFormBlock (startDate: string, finishDate: string) {
  let dateInput:string
  let dateOutput: string
  let nextMonth:string
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const nextMonthDay = (new Date(year, month + 2, day).getTime() - new Date(year, month+1, day).getTime()) / 86400000

  if (new Date().getMonth()<=9){
    dateInput = `${year}-0${month+1}-${day+1}`
    dateOutput = `${year}-0${month + 1}-${day + 3}`
    nextMonth = `${year}-0${month + 2}-${nextMonthDay}`
  }else{
    dateInput = `${year}-${month + 1}-${day+1}`
    dateOutput = `${year}-${month + 1}-${day + 3}`
    nextMonth = `${year}-${month + 2}-${nextMonthDay}}`
  }
  const inputStart = startDate ? startDate : dateInput
  const inputFinish = finishDate ? finishDate : dateOutput
  //console.log(nowDate);
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${inputStart}" min="${dateInput}" max="${nextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${inputFinish}" min="${dateOutput}" max="${nextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
