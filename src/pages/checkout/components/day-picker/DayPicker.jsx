import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setDeliveryDay,
  setDeliveryPrice,
  setDeliveryTime,
  setMonth,
} from "../../../../features/slices/submitOrderSlice";
import Checkbox from "../../../../components/checkbox/Checkbox";
import { deliveryTimes } from "../../../../assets/data/deliveryTimes";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment-jalaali";
import "moment/locale/fa";

import { FaRegClock } from "react-icons/fa";
import "./DayPicker.scss";

const DayPicker = ({ state, dayPickerRef }) => {
  const dispatch = useDispatch();
  const [activeDay, setActiveDay] = useState(0);
  const upcomingDays = [];
  const DAYS_COUNT = 5;
  const SHIPPING_PRICE = 35000;

  const getUpcomingDays = () => {
    for (let i = 0; i < DAYS_COUNT; i++) {
      let today = moment().add("day", 1).local("fa");
      today.add(i, "day");
      upcomingDays.push({
        date: today.format("jD"),
        name: today.format("dddd"),
      });
      const month = new Intl.DateTimeFormat("fa", { month: "short" }).format(
        today
      );
      dispatch(setMonth(month));
    }
  };
  getUpcomingDays();

  const setDateAndTime = (time) => {
    dispatch(setDeliveryTime(time));
    dispatch(setDeliveryPrice(SHIPPING_PRICE));
    dispatch(setDeliveryDay(upcomingDays[activeDay]));
  };

  return (
    <div className="day-picker" ref={dayPickerRef}>
      <section className="day-picker__heading">
        <span className="icon-container">
          <FaRegClock />
        </span>
        <h6 className="title">انتخاب روز و ساعت ارسال</h6>
      </section>

      <div className="day-picker__body">
        <div className="day-container">
          {upcomingDays.map((day, index) => (
            <section
              className={`day-container__item ${
                upcomingDays[activeDay].date === day.date &&
                "day-container__item--active"
              }`}
              onClick={() => setActiveDay(index)}
              key={index}
            >
              <span className="day-name">{day.name}</span>
              <span className="day-date">{day.date}</span>
            </section>
          ))}
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeDay}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.05 }}
            className="time-container"
          >
            {deliveryTimes.map(
              (item) =>
                item.dayName === upcomingDays[activeDay].name &&
                item.times.map((item) => (
                  <Checkbox
                    key={item.id}
                    checked={state.deliveryTime?.id === item.id}
                    label={` از ساعت ${item.timeStart}  تا ${item.timeEnd}`}
                    callback={() => setDateAndTime(item)}
                    additionalClass="checkbox-container--full-width"
                    additionalContent={`هزینه ارسال:${SHIPPING_PRICE.toLocaleString()}تومان`}
                  />
                ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <section className="delivery-time-info">
        {state.deliveryTime && (
          <div>
            <p className="delivery-date">
              زمان ارسال : {state.deliveryDay.name} -{" "}
              {state.deliveryTime.timeStart} تا {state.deliveryTime.timeEnd}
            </p>
            <p className="delivery-price">
              هزینه ارسال : {state.deliveryPrice.toLocaleString()} تومان
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DayPicker;
