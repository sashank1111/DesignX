import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const TimerListItem = ({ timer, onStart, onPause, onResume }) => {
  const [timeLeft, setTimeLeft] = useState(timer.duration);
  const [timerId, setTimerId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    }
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const startTimer = () => {
    setTimerId(setInterval(updateTime, 1000));
    setIsPaused(false);
  };

  const updateTime = () => {
    setTimeLeft(prevTime => {
      if (prevTime <= 0) {
        clearInterval(timerId);
        setIsPaused(true);
        return 0;
      }
      return prevTime - 1;
    });
  };

  const pauseTimer = () => {
    clearInterval(timerId);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    startTimer();
  };

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleButtonPress = () => {
    if (timeLeft === 0) {
      setTimeLeft(timer.duration);
      setIsPaused(false);
      startTimer();
    } else if (isPaused) {
      setIsPaused(false);
      resumeTimer();
    } else {
      setIsPaused(true);
      pauseTimer();
    }
  };

  return (
    <View style={{ flexDirection: 'row',alignItems:'center' ,borderWidth:1 }}>
     <View style={{borderWidth:1,}}>
      <TextInput
        style={{ flex: 1, left: 28 }}
        placeholder="Enter seconds"
        keyboardType="numeric"
        value={timer.duration.toString()}
        onChangeText={text => {
          const duration = parseInt(text);
          onStart({ ...timer, duration });
        }}
      />
      </View>
      <View style={{borderColor:'green',borderWidth:1,flex:1,alignItems:'center',padding:15}}>
      <Text style={{}}>{formatTime(timeLeft)}</Text>
      </View>
      <TouchableOpacity style={{flex:1,borderWidth:1,alignItems:'center',padding:15}} onPress={handleButtonPress}>
        <View >
        <Text style={{color:timeLeft === 0 ? 'red' : isPaused ?'red':'black'}} >{timeLeft === 0 ? 'Start' : isPaused ? 'Resume' : 'Pause'}</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const TimerTest = () => {
  const [timers, setTimers] = useState([]);
  const [newTimerSeconds, setNewTimerSeconds] = useState('');

  const addTimer = () => {
    if (newTimerSeconds === '') {
      return;
    }

    const newTimer = {
      id: Math.random().toString(),
      duration: parseInt(newTimerSeconds),
    };

    setTimers(prevTimers => [...prevTimers, newTimer]);
    setNewTimerSeconds('');
  };

  const renderTimer = ({ item }) => (
    <TimerListItem
       timer={item}
      onStart={handleStart}
      onPause={handlePause}
      onResume={handleResume}
    />
  );

  const handleStart = timer => {
    const updatedTimers = timers.map(t => {
      if (t.id === timer.id) {
        return timer;
      }
      return t;
    });
    setTimers(updatedTimers);
  };

  const handlePause = timer => {
    const updatedTimers = timers.map(t => {
      if (t.id === timer.id) {
        return timer;
      }
      return t;
    });
    setTimers(updatedTimers);
  };

  const handleResume = timer => {
    const updatedTimers = timers.map(t => {
      if (t.id === timer.id) {
        return timer;
      }
      return t;
    });
    setTimers(updatedTimers);
  };

  return (
    <View>
      <FlatList
        data={timers}
        style={{borderWidth:3,padding:10}}
        renderItem={renderTimer}
        keyExtractor={item => item.id}
      />
      <View style={{ flexDirection: 'row', justifyContent:'space-around',top:20 }}>
        <View style={{borderWidth:3,borderColor:'red2'}}>
        <TextInput
          style={{color:'red'}}
          placeholder="Enter seconds"
          value={newTimerSeconds}
          onChangeText={setNewTimerSeconds}
          keyboardType="numeric"
        />
        </View>
        <TouchableOpacity onPress={addTimer}>
        <View style={{borderWidth:3,padding:17}}>
        
          <Text >Add Timer</Text>
         </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerTest;
