window.addEventListener('DOMContentLoaded', function () {
  var actionLock = false;

  // var startLinuxScript = [
  //   'echo 96 > /sys/devices/system/cpu/cpufreq/interactive/target_loads',
  //   'echo 1094400 > /sys/devices/system/cpu/cpufreq/interactive/hispeed_freq',
  //   'echo 24 > /sys/devices/system/cpu/cpufreq/interactive/go_hispeed_load',
  //   'echo 0 > /sys/module/msm_thermal/core_control/enabled'
  // ].join(' && ')

  var startLinuxScript = [
    '/system/bin/start_linux >> /storage/emulated/ 2>&1'
  ]


  window.addEventListener('keydown', function (e) {
    if (!actionLock) {
      switch (e.key) {
        case '1':
          actionLock = true;
          // @ts-ignore
          Wallace.runCmd(startLinuxScript, function () {
            window.alert('Starting Linux.')
            actionLock = false
          }, function (e) {
            window.alert('Error: ' + e)
            actionLock = false
          });
          break
      }
    }
  })
}, false)
