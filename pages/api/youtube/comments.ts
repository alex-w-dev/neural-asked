import type { NextApiRequest, NextApiResponse } from 'next'
import {getAuthClient} from "@/server/utils/youtube";
import {google, youtube_v3} from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  var youtube = google.youtube({
    version: 'v3',
    auth: getAuthClient(req, res)
  });


  youtube.commentThreads.list({
    part: ['snippet'],
    // auth: getAuthClient(req, res),
    videoId: 'ir-s_J2STZs'
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
      res.send( err)
    }
    if (data) {
      res.send( data)
      console.log(data)
    }
  });
}