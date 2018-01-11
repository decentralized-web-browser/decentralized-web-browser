# iExec dapp samples
## 1 branch = 1 dapp

Each branch of this repo is a sample iExec dapp, and can be easily played with by using the [iexec sdk cli](https://github.com/iExecBlockchainComputing/iexec-sdk) like this:
```iexec init branchName```


```bash
iexec init # current branch containing minimum working config
iexec init factorial # download and init factorial dapp
iexec init echo # download and init echo dapp
```

Start a [Pull Request](https://github.com/iExecBlockchainComputing/iexec-dapp-samples/pulls) to add you dapp to this repo.

## [iExec Dapp Challenge](https://medium.com/iex-ec/the-iexec-%C3%B0app-challenge-150k-of-grants-to-win-abf6798b31ee)

 * Go checkout the [iExec Dapp Challenge](https://medium.com/iex-ec/the-iexec-%C3%B0app-challenge-150k-of-grants-to-win-abf6798b31ee)
 * Go submit a request to be listed on the [iExec dapp store](https://dapps.iex.ec/)

---
# My Dapp name
## Description
A dapp to download websites offline like a decentralized web browser. Simple pass the url that you want to get and it will download the html page.
## Dapp params
To execute it, do the following:
1. Deploy the app with: `iexec deploy`
2. Submit the work with: `iexec submit '{"cmdline": "https://<your-website>.com"}'``
3. Check the status of the result with: `iexec result <tx-hash>``
4. Once the job has been processed, get the file with: `iexec result <tx-hash> --save`
5. Convert the file to html by changing it's name to: `page.html` or similar
6. Open the file and check the offline website that you just downloaded

You can test the dapp locally by executing the file `./apps/WebBrowser <your-url-here>` or `./apps/WebBrowser.exe <your-url-here>` depending on if you're using linux or windows.
You can also execute the file webBrowser.js with: `node apps/webBrowser.js <your-url-here>` if you have node.js installed.
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
		cmdline:'https://<YOUR-URL-HERE>.com',
  }
};
```
