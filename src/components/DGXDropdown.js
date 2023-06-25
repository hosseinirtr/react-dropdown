import React, { useEffect, useRef, useState } from "react";
import useOutsideClicked from "../useHook/useOutsideClicked";

const DGXDropdown = ({ changeResult, list, selected }) => {
  const wrapperRef = useRef(null);
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  let data = {
    key: -1,
    name: "یک مورد را انتخاب کنید",
  };

  const handleClick = () => {
    setShowList(!showList);
  };
  useOutsideClicked(wrapperRef, handleClick);

  const selectItem = (item) => {
    setShowList(false);
    setSelectedItem(item);
    changeResult(item.name ? item.name : "هیچ");
  };

  useEffect(() => {
    if (selected) {
      const item = list.filter((item) => item.key === selected);
      setSelectedItem(item[0]);
      changeResult(item[0].name);
    }
  }, [selected]);

  return (
    <>
      <div className="drop-down" ref={wrapperRef}>
        <div
          className={`input size text color ${showList && "active"}`}
          onClick={() => handleClick()}
        >
          {selectedItem ? selectedItem.name : data.name}
        </div>
        {showList && (
          <div className="list size color">
            {list && (
              <>
                {list.length
                  ? list.map((items) => (
                      <div
                        key={items.key}
                        className="item size text"
                        onClick={() => selectItem(items)}
                      >
                        {items.name}
                      </div>
                    ))
                  : null}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DGXDropdown;
