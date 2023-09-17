import type { NextApiRequest, NextApiResponse } from 'next'
import {getAuthClient} from "@/server/utils/youtube";
import {google, youtube_v3} from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.videoId) {
    throw new Error('voideoId is required')
  }

  var youtube = google.youtube({
    version: 'v3',
    auth: getAuthClient(req, res)
  });


  youtube.commentThreads.list({
    part: ['snippet'],
    // auth: getAuthClient(req, res),
    videoId: req.query.videoId as string,
    textFormat: 'plainText',
    order: 'time',
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