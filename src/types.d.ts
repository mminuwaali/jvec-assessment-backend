const { Request } = require('express')

declare type RequestType = Request & {
    user: Pick<UserModelType, 'id'>;
};
