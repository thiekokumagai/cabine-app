import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';
import { Agent } from 'https'; 
@Injectable()
export class IncontrolApiService {
  constructor(private readonly httpService: HttpService) {}

  async auth(): Promise<string> {
    // Implementação da autenticação (substitua pelos seus dados)
    const response = await lastValueFrom(this.httpService.post('https://invs0079.inovvati.corp:4441/v1/auth/', {
      username: 'admin',
      password: 'nuKW@v79CFm2&zt$',
    }, {
      httpsAgent: new Agent({ rejectUnauthorized: false }), // Ignorar a verificação do certificado
    }));

    if (response.status === 200) {
      return response.data.token;
    } else {
      throw new Error('Usuário ou senha incorreto(s)');
    }
  }

  async uploadImage(imagePath: string): Promise<any> {
    const token = await this.auth();

    // Envio da imagem para a API
    const fileBuffer = fs.readFileSync(imagePath); // Lê a imagem do sistema de arquivos
    const extension = path.extname(imagePath);

    const response = await lastValueFrom(this.httpService.post('https://invs0079.inovvati.corp:4441/v1/arquivo/', {
      observacao: 'observacao',
    }, {
      headers: {
        Authorization: `JWT ${token}`,
      },
      // Envio do arquivo
      data: {
        file: fileBuffer,
        filename: `usuario${extension}`,
      },
      httpsAgent: new Agent({ rejectUnauthorized: false }),
    }));

    if (response.status === 200) {
      const idFoto = response.data.data.id;

      // Requisição para verificação facial
      const verificationResponse = await lastValueFrom(this.httpService.get(`https://invs0079.inovvati.corp:4441/v1/face_qa/${idFoto}`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
        httpsAgent: new Agent({ rejectUnauthorized: false })
      }));

      if (verificationResponse.status === 200) {
        return {
          image_id_incontrolapi: idFoto,
          image_file: response.data.data.file,
          image_timestamp: response.data.data.timestamp,
          image_content_type: response.data.data.content_type,
          image_face: response.data.data.face,
        };
      } else {
        throw new Error('Falha na verificação');
      }
    } else {
      throw new Error('Falha na verificação');
    }
  }
}