var fs = require('fs');
var path = require('path');
var disks = require('nodejs-disks');
var _ = require('lodash');
var lastDriveList, timer;

function setDriveList(callback) {
  disks.drives(function(err, drives) {
    lastDriveList = drives;
    callback();
  });
}

function checkForNewDrives() {
  disks.drives(function(err, drives) {
    var diff = _.difference(drives, lastDriveList);

    console.log('Checking for new drives')
    if (!diff.length) {
      timer = setTimeout(checkForNewDrives, 1000);
      return;
    }

    console.log('New drive found');
    diff.forEach(checkForAdminFolder);
  })
}

function checkForAdminFolder(drive) {
  disks.driveDetail(drive, function(err, disk) {
    if (err) {
      return console.log(err);
    }
    var folderPath = path.resolve(disk.mountpoint, 'pidrop-admin');
    fs.readdir(folderPath, function(err, files) {
      if (err) {
        return console.log('No admin folder found');
      }
      console.log('Admin folder found');
    });
  });
}

setDriveList(checkForNewDrives);
