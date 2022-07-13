window.addEventListener('DOMContentLoaded', function () {
  var actionLock = false;

  var startGUI = [
    '## STARTING LINUX ## >> /storage/emulated/boot2linux.log 2>&1',
    'echo 96 > /sys/devices/system/cpu/cpufreq/interactive/target_loads >> /storage/emulated/boot2linux.log 2>&1',
    'echo 1094400 > /sys/devices/system/cpu/cpufreq/interactive/hispeed_freq >> /storage/emulated/boot2linux.log 2>&1',
    'echo 24 > /sys/devices/system/cpu/cpufreq/interactive/go_hispeed_load >> /storage/emulated/boot2linux.log 2>&1',
    'echo 0 > /sys/module/msm_thermal/core_control/enabled >> /storage/emulated/boot2linux.log 2>&1',
    'mkdir /mnt/linux >> /storage/emulated/boot2linux.log 2>&1',
    'mount -t ext4 /dev/block/mmcblk1p2 /mnt/linux >> /storage/emulated/boot2linux.log 2>&1',
    'busybox mount --bind /dev /mnt/linux/dev >> /storage/emulated/boot2linux.log 2>&1',
    'mount -t devpts devpts /mnt/linux/dev/pts >> /storage/emulated/boot2linux.log 2>&1',
    'mount -t proc proc /mnt/linux/proc >> /storage/emulated/boot2linux.log 2>&1',
    'mount -t sysfs sysfs /mnt/linux/sys >> /storage/emulated/boot2linux.log 2>&1',
    'ln -s /dev/graphics/fb0 /dev/fb0 >> /storage/emulated/boot2linux.log 2>&1',
    'chroot /mnt/linux /bin/su - root -c "/bin/start_gui.sh" >> /storage/emulated/boot2linux.log 2>&1'
  ].join(' && ')

  // var startLinuxScript = [
  //   '/system/bin/start_linux >> /storage/emulated/ 2>&1'
  // ]


  window.addEventListener('keydown', function (e) {
    if (!actionLock) {
      switch (e.key) {
        case '1':
          actionLock = true;
          // @ts-ignore
          Wallace.runCmd(startGUI, function () {
            window.alert('Starting GUI.')
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
