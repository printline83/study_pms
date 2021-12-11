import React, { useState } from 'react';
import './App.css';

/* 
※ 첫번째 숙제 
 - 객실관리프로그램 -
1. aryData 값을 useState에 저장한다.
2. .select_room와 .room에 map함수를 이용해 aryData를 리스팅한다.
3. Reservation, Room 컴포넌트에서 객실배정 로직을 구현(객실선택 => 이름 입력 => 배정)
 예) 101호를 선택하고 "정가을"을 입력 후 배정 버튼을 누르면 해당 객실에 "정가을"이 표시
4. 내림차순 기능 구현. 
5. Room 컴포넌트에서 체크인과 체크아웃을 구현.
 단 체크인을 하지않으면 체크아웃을 할수없고 체크아웃이면 체크인을 해제할수없다.
6. 배정취소 기능을 구현.
7. 시간이 남으면 원하는 기능을 추가로 구현
*/

function App() {

  let aryData = [
    { room: '101호', in: false, out: false, name: '' },
    { room: '102호', in: true, out: false, name: '동주' },
    { room: '103호', in: true, out: true, name: '정대지' },
    { room: '104호', in: false, out: false, name: '' },
    { room: '105호', in: false, out: false, name: '' },
    { room: '106호', in: false, out: false, name: '' },
    { room: '107호', in: false, out: false, name: '' },
    { room: '201호', in: false, out: false, name: '' },
    { room: '202호', in: false, out: false, name: '' },
    { room: '203호', in: false, out: false, name: '' },
    { room: '204호', in: false, out: false, name: '' },
    { room: '205호', in: false, out: false, name: '' },
    { room: '206호', in: false, out: false, name: '' },
    { room: '301호', in: false, out: false, name: '' },
    { room: '302호', in: false, out: false, name: '' },
    { room: '303호', in: false, out: false, name: '' },
    { room: '304호', in: false, out: false, name: '' },
    { room: '305호', in: false, out: false, name: '' },
    { room: '306호', in: false, out: false, name: '' },
  ];

  return (
    <div className="app">
      <Reservation data={aryData} />
      <Rooms data={aryData} />
    </div>
  );
}

function Reservation( props ) {
  return (
    <div className="reservation">
      <select className="select_room">
        <option>객실을 선택해주세요.</option>
        <option>{props.data[0].room}</option>
        <option>{props.data[1].room}</option>
        <option>{props.data[2].room}</option>
        <option>{props.data[3].room}</option>
      </select>
      <input type="text" placeholder="이름을 입력해주세요." />
      <button type="button" >배정</button>
      <label>
        <input type="checkbox" /> 내림차순
      </label>
    </div>
  )
}

function Rooms( props ) {
  return (
    <ul className="rooms">
      <Room data={props.data[0]} />
      <Room data={props.data[1]} />
      <Room data={props.data[2]} />
      <Room data={props.data[3]} />
    </ul>
  )
}

function Room( props ) {
  const data = props.data;
  return (
    <li className={'room' + (data.in ? ' checkin' : '') + (data.out ? ' checkout' : '')}> 
      <div className="box">
        <div className="head">
          <p>{data.room}</p> 
          <button type="button" className="cancel">취소</button>
          <input type="checkbox" value="in" onChange={() => {}} checked={data.in} />
          <input type="checkbox" value="out" onChange={() => {}} checked={data.out} />
        </div>
        <div className="name">{data.name}</div>
      </div>
    </li>
  )
}

export default App;
