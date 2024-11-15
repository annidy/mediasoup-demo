let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, consumerReplicas })
{
	const roomUrl = process.env.ROOM_URL;
	if (roomUrl !== undefined) {
		return `wss://${roomUrl}?roomId=${roomId}&peerId=${peerId}&consumerReplicas=${consumerReplicas}`;
	}
	const hostname = window.location.hostname;

	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}&consumerReplicas=${consumerReplicas}`;
}
