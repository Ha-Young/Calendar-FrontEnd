import { DownOutlined, OneToOneOutlined, PushpinOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";

import { VIEW_OPTION } from '../../constants/stateTypes';
import { toUpperFirstChar } from '../../utils/common';

const MENU_KEYS = [VIEW_OPTION.DAILY, VIEW_OPTION.WEEKLY];
const MENU_ICONS = {
  [MENU_KEYS[0]]: <PushpinOutlined />,
  [MENU_KEYS[1]]: <OneToOneOutlined />,
};


function DailyWeekDropDown({ onChange, defaultKey=MENU_KEYS[0] }) {
  const [selectedKey, setSelectedKey] = useState(defaultKey);

  function handleMenuClick(e) {
    if (selectedKey !== e.key) {
      setSelectedKey(e.key);
      onChange(e.key);
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key={MENU_KEYS[0]} icon={MENU_ICONS[MENU_KEYS[0]]}>
        Daily
      </Menu.Item>
      <Menu.Item key={MENU_KEYS[1]} icon={MENU_ICONS[MENU_KEYS[1]]}>
        Weekly
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown.Button
      trigger={['click']}
      overlay={menu}
      icon={<DownOutlined />
      }
    >
      {MENU_ICONS[selectedKey]}
      {toUpperFirstChar(selectedKey)}
    </Dropdown.Button>
  );
}

export default DailyWeekDropDown;
