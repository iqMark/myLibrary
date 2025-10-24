// fileAccess.js
class FileAccess {
  deleteFile(filename) {
    console.log(`File ${filename} deleted.`);
  }
}

// proxyFileAccess.js
class FileAccessProxy {
  constructor(userRole) {
    this.userRole = userRole;
    this.fileAccess = new FileAccess();
  }

  deleteFile(filename) {
    if (this.userRole !== "admin") {
      console.log("userRole:", this.userRole);  
      console.log("Access Denied: Only admins can delete files.");
      console.log("file", filename, "not deleted.");
      return;
    }
    // the code below runs only if the userRole is 'admin'
    console.log("userRole:", this.userRole);
    this.fileAccess.deleteFile(filename);
  }
}

// client.js
const admin = new FileAccessProxy("admin");
admin.deleteFile("log.txt");

const guest = new FileAccessProxy("guest");
guest.deleteFile("data.txt");
