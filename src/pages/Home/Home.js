import React from 'react';
import './Home.css';
import LineChart from '../../components/LineChart/LineChart';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__tiles">
        <NavLink to='auto-planner' className="home__tile">
          Auto Planner
        </NavLink>
        <div className="home__tile">
          OEE
        </div>
        <div className="home__tile">
          ABC
        </div>
        <div className="home__tile">
          XYZ
        </div>
        <div className="home__tile">
          MKG
        </div>
      </div>

      <div className="home__main">
        <div className="home__charts">
          <div className="chart__group">
            <div className="chart__labels">
              <div className="chart__label">Performance</div>
              <div className="chart__value">99%</div>
            </div>
            <div className="chart">
              <LineChart color='#e15f41'/>
            </div>
          </div>

          <div className="chart__group">
            <div className="chart__labels">
              <div className="chart__label">Availability</div>
              <div className="chart__value">83%</div>
            </div>
            <div className="chart">
              <LineChart color='#c44569'/>
            </div>
          </div>

          <div className="chart__group">
            <div className="chart__labels">
              <div className="chart__label">Quality</div>
              <div className="chart__value">97%</div>
            </div>
            <div className="chart">
              <LineChart color='#546de5'/>
            </div>
          </div>
        </div>
        <div className="home__logs">
          <div className="log">
            <div className="log__time">4/3/2023 10:00:00</div>
            <div className="log__event">Open event</div>
          </div>

          <div className="log">
            <div className="log__time">4/3/2023 11:00:00</div>
            <div className="log__event">Close event</div>
          </div>

          <div className="log">
            <div className="log__time">4/3/2023 12:00:00</div>
            <div className="log__event">Open event</div>
          </div>

          <div className="log">
            <div className="log__time">4/3/2023 13:00:00</div>
            <div className="log__event">Open event</div>
          </div>

          <div className="log">
            <div className="log__time">4/3/2023 14:00:00</div>
            <div className="log__event">Open event</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
