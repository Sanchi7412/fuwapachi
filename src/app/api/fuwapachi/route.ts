import { PrismaClient, bubble } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
	// todoテーブルから全件取得
	const bubbles: bubble[] = await prisma.bubble.findMany();
	return Response.json(bubbles);
}

export async function POST(request: Request) {
	const { message }: { message: string } = await request.json();

	const response = await prisma.bubble.create({
		data: {
			message,
		},
	});

	return Response.json(response);
}
