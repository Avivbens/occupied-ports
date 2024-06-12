<div align="center">

# Occupied Ports 🚀

Get all used ports on your machine, with the related process information.

<br>

[![npm](https://img.shields.io/npm/v/occupied-ports)](https://www.npmjs.com/package/occupied-ports)
[![npm](https://img.shields.io/npm/dt/occupied-ports)](https://www.npmjs.com/package/occupied-ports)
![GitHub](https://img.shields.io/github/license/avivbens/occupied-ports)

</div>

## Installation

```bash
npm install occupied-ports
```

## Usage

```javascript
import { getPorts } from 'occupied-ports'

getPorts().then((ports) => {
    console.log(ports) // [{ port: 3000, pid: 1234, process: 'node' }, ...]
})
```

## Compatibility

| MacOS              | Windows       |         Linux |
| :----------------- | ------------- | ------------: |
| :white_check_mark: | :interrobang: | :interrobang: |

#### Please let us know if you have tested this library on Windows or Linux, so we can update the compatibility table.

## Linting

To lint the entire project, execute the following command;

```bash
npm run lint
```

To lint and fix the entire project, execute the following command;

```bash
npm run lint:fix
```

To format the entire project using prettier, execute the following command;

```bash
npm run format
```

## Build

To build the library, execute the following command;

```bash
npm run build
```

## Test

To run unit tests for the library, execute the following;

```
npm run test
```
