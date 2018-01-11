# Decentralized Web Browser
## Description
A dapp to download websites offline like a decentralized web browser. Simple pass the url that you want to get and it will download the html page.
## Dapp params
To execute it, do the following:
1. Deploy the app with: `iexec deploy`
2. Submit the work with: `iexec submit '{"cmdline": "--url https://<your-website>.com"}'``
3. Check the status of the result with: `iexec result <tx-hash>``
4. Once the job has been processed, get the file with: `iexec result <tx-hash> --save`
5. Convert the file to html by changing it's name to: `page.html` or similar
6. Open the file and check the offline website that you just downloaded

You can test the dapp locally by executing the file `./apps/WebBrowser --url <your-url-here>` or `./apps/WebBrowser.exe --url <your-url-here>` depending on if you're using linux or windows.
You can also execute the file webBrowser.js with: `node apps/webBrowser.js --url <your-url-here>` if you have node.js installed.
## [Examples](./examples)
If you want, you can set the url in the `iexec.js` file instead of passing it as a parameter. Modify the file like this:
```
module.exports = {
  name: 'WebBrowser',
  data: {
    type: 'BINARY',
    cpu: 'AMD64',
    os: 'LINUX',
  },
  work: {
		cmdline:'--url https://<YOUR-URL-HERE>.com',
  }
};
```
